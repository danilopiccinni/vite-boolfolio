<script>

import 'animate.css';

export default {
    name :'Home',
  data() {
    return {
      activeImage: 1,

      animationOn: false,

    };
  },

  mounted() {

  },
  methods: {

  }
};
</script>

<template>

<section class="section-carousel">
    <div class=" d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 py-5 container">

        <div class="animate__animated animate__fadeInLeft d-flex justify-content-center col-12 col-lg-6 ">
            <div class="carousel carousel-image">
                <div id="carouselExampleAutoplaying" class="carousel slide carousel-1" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" >
                            <img src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" >
                            <img src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" >
                            <img src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="carousel-rignt d-flex flex-column justify-content-center align-items-center col-12 col-lg-6">
            <div class="carousel animate__animated animate__fadeInRight">
                <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="text d-block w-100">
                            <h3>CREAZIONE SITI WEB PER QUALUNQUE ATTIVITA'</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt fuga a laudantium. Facilis placeat harum quis, temporibus omnis molestiae earum recusandae labore distinctio unde, commodi culpa voluptatibus voluptatum asperiores aut.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero similique quisquam nemo commodi et amet necessitatibus, dolores quam magni hic doloribus alias ad, praesentium enim, totam atque iusto consequatur!
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="text d-block w-100">
                            <h3>CONSULENZA E ANALISI TECNICA SITO WEB</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia non cumque minus quas libero culpa facere ab veniam omnis quaerat, illo fuga incidunt possimus accusamus corporis dolorum officiis officia consequatur!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus ullam, quam dolorem ratione animi dolor autem quisquam ea a molestias voluptatum! Harum ea animi dolor quo ullam sed maiores.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="text d-block w-100">
                            <h3>CREAZIONE LOGHI ED ELEMENTI GRAFICI PER I SOCIAL</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, hic ut. Officiis beatae tenetur, magni, ducimus sit quam et hic officia harum molestiae, tempora odit aperiam distinctio est. Provident, magnam!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis sequi deserunt aperiam modi quis dicta, aspernatur, neque laudantium id voluptate voluptatibus blanditiis ducimus minus aliquid ab eos fugiat beatae.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<img class="wave-carousel" src="../../public/img/wave.svg" alt="">
    
    



<section>
    <div class="container my-5">
        <h2>Siti web personalizzati | Un design web unico e una programmazione ad hoc</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci optio possimus, quod, fuga, debitis voluptate eos pariatur id velit volu Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro eum facere nihil illo nemo odit eligendi similique quae, totam, doloremque esse magnam neque repudiandae dolore. Exercitationem vero non labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facilis architecto distinctio voluptas, ea porro eum dolore asperiores soluta dolorum ratione iusto aperiam ullam atque modi laudantium incidunt aliquam cum? ptatum molestiae perferendis magnam doloremque ullam aut quis vitae alias accusantium.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quae. Temporibus aliquid commodi, nulla, alias magni nisi ullam amet quo perferendis eaque quos quas! Nobis incidunt ullam minima quibusdam iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facilis assumenda perferendis a aliquam mollitia in dolor consectetur est repudiandae, tempora consequuntur hic, cum nostrum. Quidem, expedita. Consectetur, numquam distinctio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, harum labore quidem quas aperiam tempore, hic quia fugiat obcaecati quos sit a vel amet aliquam praesentium perspiciatis at, beatae nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi suscipit earum omnis possimus eligendi voluptatem asperiores, illum voluptatibus laborum harum nulla, magni natus. Saepe dolore adipisci sunt repellendus accusamus.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellendus nemo, corporis temporibus ipsa aspernatur voluptatum, dolore cum maxime saepe quasi quaerat repudiandae veniam pariatur dolorem quae incidunt excepturi asperiores!</p>
    
    </div>
</section>


<section class="section-full-screen" @mouseover="animationOn=true" @mouseleave="animationOn=false">

    <div class="d-flex justify-content-center flex-column flex-sm-row">
        <div class="col-4 column-1 column d-none d-lg-block">
            <img src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ" class="img-fluid" alt="...">
        </div>
        <div class="column-2  col-12  col-sm-4 text-end">
            <div>
                <h3>Di Cosa mi occupo</h3>
            </div>
            <div class="cont-list">
                <ul >
    
                    <li :class="animationOn==true ? 'animate__animated animate__fadeInDownBig': ''">
                        <span>UN TITOLO IN GRASSETTO </span>
                        <span>un po di testo per prendere misure</span> 
                    </li>
                    <li :class="animationOn==true ? 'animate__animated animate__fadeInDown': '' ">
                        <span>UN TITOLO IN GRASSETTO </span>
                        <span>un po di testo per prendere misure</span> 
                    </li>
                    <li :class="animationOn==true ? 'animate__animated animate__fadeInLeft': '' ">
                        <span>UN TITOLO IN GRASSETTO </span>
                        <span>un po di testo per prendere misure</span> 
                    </li>
                    <li :class="animationOn==true ? 'animate__animated animate__fadeInUp': '' ">
                        <span>UN TITOLO IN GRASSETTO </span>
                        <span>un po di testo per prendere misure</span> 
                    </li>

                </ul>
            </div>
        </div>
        <div class="column-3 col-12 col-sm-4 column">
            <div>
                <h3>Perche scegliermi</h3>
            </div>
            <div class="cont-list" >
                <ul  :class="animationOn==true ? 'animate__animated animate__fadeInRight ' : ''"  >
                    <li :class="animationOn==true ? 'animate__animated animate__fadeInLeft ' : ''" class="animate__animated animate__fadeInLeft">
                        <strong>1</strong>
                        <span>UN TITOLO IN GRASSETTO </span>
                        <span> elit. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.</span> 
                    </li>
                    <li class="animate__animated animate__fadeInLeft">
                        <strong>2</strong>
                        <span>UN TITOLO IN GRASSETTO </span>
                        <span> elit. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.</span> 
                    </li>
                    <li class="animate__animated animate__fadeInLeft">
                        <strong>3</strong>
                        <span>UN TITOLO IN GRASSETTO </span>
                        <span>. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.</span> 
                    </li>
                    <li class="animate__animated animate__fadeInLeft">
                        <strong>4</strong>
                        <span>UN TITOLO IN GRASSETTO </span>
                        <span> elit. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.</span> 
                    </li>
                </ul>

            </div>
        </div>
    </div>

</section>

<section>
    <div class="container my-5">
        <h2>Web design sartoriale | Il proprio sito web, su misura</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci optio possimus, quod, fuga, debitis voluptate eos pariatur id velit volu Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro eum facere nihil illo nemo odit eligendi similique quae, totam, doloremque esse magnam neque repudiandae dolore. Exercitationem vero non labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facilis architecto distinctio voluptas, ea porro eum dolore asperiores soluta dolorum ratione iusto aperiam ullam atque modi laudantium incidunt aliquam cum? ptatum molestiae perferendis magnam doloremque ullam aut quis vitae alias accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, harum labore quidem quas aperiam tempore, hic quia fugiat obcaecati quos sit a vel amet aliquam praesentium perspiciatis at, beatae nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi suscipit earum omnis possimus eligendi voluptatem asperiores, illum voluptatibus laborum harum nulla, magni natus. Saepe dolore adipisci sunt repellendus accusamus.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellendus nemo, corporis temporibus ipsa aspernatur voluptatum, dolore cum maxime saepe quasi quaerat repudiandae veniam pariatur dolorem quae incidunt excepturi asperiores!</p>
    </div>
</section>


<section class="banner">
    <div class="__container">
        <div class="row ps-5 ps-sm-0">
            <div class="cont-sx col-8">
                <strong>
                    100% AL
                    <br>
                     CASO TUO
                </strong>
            </div>
            <div class="cont-dx col-4 d-none d-sm-block">
                <strong>Creo per te il sito che fa al caso tuo</strong>
                <em>Una collaborazione di idee studiate per te insieme a te</em>
                <span>vuoi saperne di piu?</span>
            </div>
        </div>
        
    </div>

</section>

<section>
    <div class="container my-5">
        <h2>Focus | Siti web custom realizzati in base alla tua attività</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci optio possimus, quod, fuga, debitis voluptate eos pariatur id velit volu Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro eum facere nihil illo nemo odit eligendi similique quae, totam, doloremque esse magnam neque repudiandae dolore. Exercitationem vero non labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facilis architecto distinctio voluptas, ea porro eum dolore asperiores soluta dolorum ratione iusto aperiam ullam atque modi laudantium incidunt aliquam cum? ptatum molestiae perferendis magnam doloremque ullam aut quis vitae alias accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, harum labore quidem quas aperiam tempore, hic quia fugiat obcaecati quos sit a vel amet aliquam praesentium perspiciatis at, beatae nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi suscipit earum omnis possimus eligendi voluptatem asperiores, illum voluptatibus laborum harum nulla, magni natus. Saepe dolore adipisci sunt repellendus accusamus.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellendus nemo, corporis temporibus ipsa aspernatur voluptatum, dolore cum maxime saepe quasi quaerat repudiandae veniam pariatur dolorem quae incidunt excepturi asperiores!</p>
    </div>
</section>

<section class="section-card-w-sticky">

    <div class="container">
        <div class="row row-cols-2">
            <div class="col-12 col-md-6 row-cols-2 d-flex flex-wrap gap-3  justify-content-center ">

                <div v-for="index in 6" class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>

            </div>
            <div class="col-4 d-none d-sm-block">
                <div class="sticky">
                    <div class="sticky-top">
                        <span class="title">
                            Focus | Siti web custom realizzati in base alla tua attività
                        </span>
                        <p>Vorresti un <strong>sito web personalizzato</strong> sulla tua attività? Desideri farla crescere con l'aiuto di un professionista? Scopri attraverso i <strong>business focus</strong> quale tipologia di sviluppo si adatta di più alla tua attività.</p><p>Richiedendo una <strong>consulenza professionale</strong> ti fornirò, attraverso un'analisi del tuo progetto, una <strong>proposta di sviluppo</strong> basata sulle tue necessità.</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>
</template>

<style scoped lang="scss">

html {
    overflow-x: hidden;
}

// section carousel
.section-carousel {
    background-color: #11111f;
    color:#a4a4a4;
}
    .carousel-1{
        border-radius: 5px 5px 5px 50%;
        overflow: hidden;
    }
    
    .carousel{
        // max-width: 500px;
        }

.wave-carousel{
    color: #11111f;
    width: 100%;
    rotate: 180deg;
}
// /section carousel





// section width max

.section-full-screen {
    background-color: #f6f6f6;

    .column-1{
        overflow: hidden;
        img {
            height: 100%;
            object-fit: cover;
  
        }
    }

    .column-2 {
        border-right: 1px solid black;

        h3{
            padding-top: 15px;
            padding-right: 15px;
            margin-bottom: 50px;
        }

        .cont-list {
            height: 80%;
            ul {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 50px;

                padding-right: 15px;
                padding-bottom: 5px;
    
                li {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    list-style-type: none;
                    overflow: hidden;
                    position: relative;

                    padding: 50px 10px;

                    &:hover {
                        cursor: pointer;
                    }



                    span{
                        z-index: 1;
                    }

                    &::after{
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 100%;
                        right: 0;
                        background-color: #f56f61;
                    
                        z-index: 0;
                        transition: 1s;
                    }
                    &:hover::after{
                    left: 0%;
                    }

                }
            }

        }
    }

    .column-3{
        border-left: 1px solid black;

        h3{
            padding-top: 15px;
            padding-left: 15px;
            margin-bottom: 50px;
        }

        .cont-list {
            height: 80%;
            ul {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 50px;

                padding-left: 15px;
                padding-right: 0;
                
                li {
                    display: flex;
                    flex-direction: column;
                    list-style-type: none;
                }
            }
        }
    }
}
// /section width max





// banner

.banner {
    background-color: #11111f;

    .__container {

        padding: 0 5%;


        .row {
            display: flex;
            justify-content: space-between;
    
            .cont-sx {
                translate: 0px 7px;
    
                strong {
                    line-height: 0.50;
                    color: white;
                    font-size: 100px;
                    // margin: -7px 0 -4px 0;
                }
            }
            .cont-dx{
                display: flex;
                flex-direction: column;
                justify-content: center;
    
                color: white;
    
                *{
                    text-align: end;
                }
            }
        }
    }

 }

// /banner


// section cards

.section-card-w-sticky {

.card {
    width: 150px;
    height: 400px;
}

.sticky {
    position: sticky;
    top: 120px;
}
}

// /section cards




</style>