"use client";

import { useEffect, useMemo, useState } from "react";
import Select, { SingleValue } from "react-select";
import styles from "../blog.module.css";

type Program = {
  id: number;
  referenceNumber: string;
  program: string;
  institution: string;
  level: "MAESTRIA" | "DOCTORADO" | "ESPECIALIDAD" | "NO_DETECTADO";
};

type SNPJson = {
  programs: Program[];
};

type Option = {
  value: string;
  label: string;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const levelOptions: Option[] = [
  { value: "ALL", label: "Todos" },
  { value: "MAESTRIA", label: "Maestría" },
  { value: "DOCTORADO", label: "Doctorado" },
  { value: "ESPECIALIDAD", label: "Especialidad" },
  { value: "NO_DETECTADO", label: "Sin nivel explícito" },
];

const ProgramFinder = () => {
  const [data, setData] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<Option>(levelOptions[0]);
  const [institution, setInstitution] = useState<Option>({
    value: "ALL",
    label: "Todas",
  });

  const [page, setPage] = useState(1);
  const pageSize = 20;

  // ✅ NO hace scroll al entrar, solo cuando pagines (Siguiente/Anterior)
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (!shouldScroll) return;

    document
      .getElementById("buscador-snp-2025")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page, shouldScroll]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          "/data/snp_2025_programas_SNP_2025_con_nivel.json",
          { cache: "force-cache" }
        );
        const json = (await res.json()) as SNPJson;
        setData(json.programs || []);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const institutionOptions = useMemo<Option[]>(() => {
    const set = new Set<string>();
    for (const p of data) {
      if (p.institution) set.add(p.institution);
    }
    const list = Array.from(set).sort((a, b) => a.localeCompare(b));
    return [
      { value: "ALL", label: "Todas" },
      ...list.map((x) => ({ value: x, label: x })),
    ];
  }, [data]);

  const filtered = useMemo(() => {
    const q = normalize(query);

    return data.filter((p) => {
      const okLevel = level.value === "ALL" ? true : p.level === level.value;
      const okInst =
        institution.value === "ALL"
          ? true
          : p.institution === institution.value;

      if (!q) return okLevel && okInst;

      const haystack = normalize(
        `${p.program} ${p.institution} ${p.referenceNumber}`
      );
      return okLevel && okInst && haystack.includes(q);
    });
  }, [data, query, level.value, institution.value]);

  useEffect(() => {
    setPage(1);
  }, [query, level.value, institution.value]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const current = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const handleClear = () => {
    setQuery("");
    setLevel(levelOptions[0]);
    setInstitution({ value: "ALL", label: "Todas" });
    setPage(1);
  };

  const handleLevelChange = (opt: SingleValue<Option>) => {
    setLevel(opt || levelOptions[0]);
  };

  const handleInstitutionChange = (opt: SingleValue<Option>) => {
    setInstitution(opt || { value: "ALL", label: "Todas" });
  };

  const isClearDisabled =
    query.trim() === "" && level.value === "ALL" && institution.value === "ALL";

  return (
    <div className={styles.finder}>
      <div className={styles.controls}>
        <div className={styles.topRow}>
          <div className={styles.controlSearch}>
            {/* ✅ el ID debe estar donde quieres caer */}
            <label id="buscador-snp-2025" className={styles.label}>
              Buscar
            </label>

            <input
              className={styles.input}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ej: Ciencia de datos, Derecho, Robótica…"
            />
          </div>

          <div className={styles.controlLevel}>
            <label className={styles.label}>Nivel</label>
            <Select
              instanceId="level-select"
              classNamePrefix="rs"
              options={levelOptions}
              value={level}
              onChange={handleLevelChange}
              isSearchable
            />
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.controlInstitution}>
            <label className={styles.label}>Institución</label>
            <Select
              instanceId="institution-select"
              classNamePrefix="rs"
              options={institutionOptions}
              value={institution}
              onChange={handleInstitutionChange}
              isSearchable
            />
          </div>

          <div className={styles.controlClear}>
            <label className={styles.label}>&nbsp;</label>
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              disabled={isClearDisabled}
            >
              Borrar filtros
            </button>
          </div>
        </div>
      </div>

      <div className={styles.metaRow}>
        <span>
          {loading ? (
            "Cargando…"
          ) : (
            <>
              Resultados: <strong>{filtered.length}</strong>
            </>
          )}
        </span>

        <span className={styles.metaRight}>
          Página <strong>{page}</strong> de <strong>{totalPages}</strong>
        </span>
      </div>

      <div className={styles.results}>
        {loading ? (
          <div className={styles.empty}>Cargando…</div>
        ) : current.length === 0 ? (
          <div className={styles.empty}>No hay resultados con esos filtros.</div>
        ) : (
          current.map((p) => (
            <div key={`${p.id}-${p.referenceNumber}`} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.pill}>{p.level}</span>
                <span className={styles.ref}>Ref: {p.referenceNumber}</span>
              </div>

              <h4 className={styles.title}>{p.program}</h4>
              <p className={styles.subtitle}>{p.institution}</p>

              <div className={styles.cardActions}>
                <a href="/simuladores" className={styles.cta}>
                  Practicar EXANI III
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={styles.pagination}>
        <button
          type="button"
          className={styles.pageButton}
          disabled={page <= 1}
          onClick={() => {
            setShouldScroll(true);
            setPage((p) => Math.max(1, p - 1));
          }}
        >
          Anterior
        </button>

        <button
          type="button"
          className={styles.pageButton}
          disabled={page >= totalPages}
          onClick={() => {
            setShouldScroll(true);
            setPage((p) => Math.min(totalPages, p + 1));
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ProgramFinder;
