'use client'
import Image from "next/image";
import { useState } from "react";
import filterStyles from './Filters.module.css'
import Select from "react-select";


const FilterComponents = () => {

    const [filters, setFilters] = useState(false);
    return (
        <>
  <div className={filterStyles['overlay']}>
    <div className={filterStyles['admin-filters-container']}>
      <div className={filterStyles['admin-filter-content']}>
        <div className={filterStyles['admin-filter-header']}>
          <h3>Filtros</h3>
          <Image
            onClick={() => {
              setFilters(false);
            }}
            src="/admin/x.png"
            alt="Cerrar filtros"
            width={24}
            height={24}
          />
        </div>

        <div className={filterStyles['admin-filters-items']}>
          <div className={filterStyles['admin-duo-input']}>
            <label htmlFor="">Tipo de pregunta</label>
            <Select />
          </div>

          <div className={filterStyles['admin-duo-input']}>
            <label htmlFor="">Asignado</label>
            <Select />
          </div>

          <div className={filterStyles['admin-duo-input']}>
            <label htmlFor="">Categoría</label>
            <Select />
          </div>

          <div className={filterStyles['admin-duo-input']}>
            <label htmlFor="">Etiquetas</label>
            <Select />
          </div>

          <div className={filterStyles['admin-duo-input']}>
            <label htmlFor="">Autor</label>
            <Select />
          </div>
        </div>
      </div>

      <div className={filterStyles['admin-filters-footer']}>
        <button className={filterStyles['bordered']}>Reset</button>
        <button>Aplicar</button>
      </div>
    </div>
  </div>
        </>
      );
}
 
export default FilterComponents;