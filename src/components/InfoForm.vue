<script>

    export default {
        name: 'InfoForm',

        data() {
            return {

            }
        }
    }

</script>

<template>
<section class="section-form mt-5">
    
    <div class="container">
        <div class="row">
            <div class="cont-sx col-12 col-xl-4 col-lg-5  mb-5">
                <strong class="title">Follow me</strong>
                <span class="title-desc">Nuovi progetti, esperienze lavorative e idee</span>
                <div class="container-social">
                    <a href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-dribbble"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-pinterest"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-behance"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-skype"></i>
                    </a>
                </div>
            </div>
            <div class="cont-dx col-12 col-xl-7 col-lg-7 offset-xl-1">
                <strong class="title">Rimani aggiornato</strong>
                <span class="title-desc">Rimani aggiornato su servizi e prodotti per migliorare il tuo business online</span>
                <div>
                    <form action="" method=""> 
                        <div class="cont-input flex-column py-3 gap-1">
                            <div>
                                <input class="form-control" type="text" name="nome" value="" size="40" aria-invalid="false" placeholder="nome">
                            </div>
                            <div>
                                <input class="form-control" type="email" name="email" value="" size="40" aria-required="true" aria-invalid="false" placeholder="indirizzo email *">
                            </div>
                        </div> 	
                        <div class="col-12 "> 		
                            <label class="mb-3">
                                <input type="checkbox" name="newsletter" value="1" aria-invalid="false">
                                <span>
                                    <span>Desidero ricevere aggiornamenti inerenti ad offerte ed servizi proposti in base a quando espresso nella </span> 
                                    <a href="">privacy policy</a>
                                </span>
                            </label>	
                            <div class="col-12"> 		
                                <div class="container-input-submit">
                                    <input type="submit" value="Rimani aggiornato">
                                </div> 	
                            </div> 
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
                            
</template>

<style scoped lang="scss">
    .section-form {

background-color: #f6f6f6;

.container {

    padding: 100px 80px ;

    strong {
        font-size: 28px;
    }
}

}

.section-form {

.cont-sx {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .container-social {
        display: flex;
        gap: 15px;
    }
    i {
        font-size: 30px;
    }
}

.cont-dx{
    display: flex;
    flex-direction: column;
    gap: 10px;

    .cont-input {
        display: flex;
        gap: 5px;
    }
}

}

</style>