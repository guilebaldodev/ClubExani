"use client"
import Image from "next/image";
import styles from './prices.module.css';
import { useClerk, useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";

const PricingPage = () => {

  const {user} = useUser()
  const {openSignIn}= useClerk()

  console.log(user)

  const handlePurchase = async(priceId: string) =>{
    

  if (!user) {
    openSignIn(); 
    return;
  }

    try {
          const res = await fetch("api/checkout",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        priceId,
        user:user?.id
      })
    })

    const data = await res.json()

    if(data.url){
      window.location.href = data.url
    }else{
      throw Error
    }

    } catch (error) {
      toast.error("Problemas en la compra")
    }





  }



  return (
    <>


      <div className={styles['pricing-page-container']}>
        <div className={styles['pricing-page-titles']}>
          <h2>Compra monedas para simula exámenes</h2>
          <p>
            En Simulandum solo pagas por lo que usas. Compra monedas y canjéalas por simuladores de exámenes cuando lo necesites, sin compromisos ni mensualidades. 
            Olvídate de pagar precios exagerados como en otras plataformas: aquí tú eliges cuánto invertir y cuándo estudiar.
          </p>
        </div>

        <div className={styles['pricing-plans-container']}>

          {/* Acceso inicial */}
          <div className={`${styles['plan-item']} ${styles['free-plan']}`}>
            <div className={styles['plan-info']}>
              <h4>Acceso inicial</h4>
              <p className={styles['p-100']}>Explora Simulandum sin costo</p>
              <div className={styles['plan-info-price']}>
                <h4>$0</h4>
              </div>
              <p className={styles['plan-info-last']}>Incluye exámenes de prueba</p>
              <button className={styles['plan-button']}>Plan inical</button>
            </div>

            <div className={styles['plan-item-includes']}>
              <h4>Incluye:</h4>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Simuladores gratuitos de prueba</p>
              </div>
            </div>
          </div>

          {/* Recarga Básica */}
          <div className={styles['plan-item']}>
            <div className={styles['plan-info']}>
              <h4>Recarga Básica</h4>
              <p className={styles['p-100']}>Para quienes quieren empezar con calma</p>
              <div className={styles['plan-info-price']}>
                <h4>$49</h4>
              </div>
              <p className={styles['plan-info-last']}>50 monedas</p>
              <button onClick={()=>handlePurchase("price_1RW7jlR9Y0DKMvQGEQRvBtda")} className={styles['plan-button']}>Comprar</button>
            </div>

            <div className={styles['plan-item-includes']}>
              <h4>Incluye:</h4>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Canjea por simuladores</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Monedas extra como bono de bienvenida</p>
              </div>
            </div>
          </div>

          {/* Recarga Estándar */}
          <div className={styles['plan-item']}>
            <div className={styles['plan-info']}>
              <h4>Recarga Estándar</h4>
              <p className={styles['p-100']}>Perfecta para aplicar varios exámenes</p>
              <div className={styles['plan-info-price']}>
                <h4>$89</h4>
              </div>
              <p className={styles['plan-info-last']}>100 monedas</p>
              <button onClick={()=>handlePurchase("price_1RWLAuR9Y0DKMvQGjytpl2Jh")} className={styles['plan-button']}>Comprar</button>

           </div>

            <div className={styles['plan-item-includes']}>
              <h4>Incluye:</h4>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Simuladores para diferentes exámenes</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Más monedas por menos precio</p>
              </div>
            </div>
          </div>

          {/* Recarga Pro (Más vendida) */}
          <div className={`${styles['plan-item']} ${styles['plan-item-selected']}`}>
            <div className={styles['plan-popular']}>Más vendida</div>
            <div className={styles['plan-info']}>
              <h4>Recarga Pro</h4>
              <p className={styles['p-100']}>Más monedas, mejor precio, mejor preparación.</p>
              <div className={styles['plan-info-price']}>
                <h4>$199</h4>
              </div>
              <p className={styles['plan-info-last']}>250 monedas</p>
              <button onClick={()=>handlePurchase("price_1RWLQER9Y0DKMvQGZCNhnZm9")} className={styles['plan-button']}>Comprar</button>

            </div>

            <div className={styles['plan-item-includes']}>
              <h4>Incluye:</h4>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Más valor por tu dinero</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Te damos monedas adicionales sin costo</p>
              </div>
            </div>
          </div>

          {/* Recarga Élite */}
          <div className={styles['plan-item']}>
            <div className={styles['plan-info']}>
              <h4>Recarga Élite</h4>
              <p className={styles['p-100']}>Para quienes quieren acceso total</p>
              <div className={styles['plan-info-price']}>
                <h4>$349</h4>
              </div>
              <p className={styles['plan-info-last']}>500 monedas</p>
              <button onClick={()=>handlePurchase("price_1RWSz6R9Y0DKMvQG5lOmhzNR")} className={styles['plan-button']}>Comprar</button>
            </div>

            <div className={styles['plan-item-includes']}>
              <h4>Incluye:</h4>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Mayor cantidad de simuladores</p>
              </div>
              <div className={styles['plan-include-item']}>
                <Image src="/landing/check-icon.png" alt="" width={22} height={22} />
                <p>Gran bonificación incluida en esta recarga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;

