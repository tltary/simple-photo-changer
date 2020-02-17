# simple-photo-changer

add [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/), [jQuery](https://code.jquery.com/) and [owlCarousel](https://owlcarousel2.github.io/OwlCarousel2/) for you project

[Demo](https://tltary.github.io/simple-photo-changer/index.html)

### example for use

```html
    <section class="photo js-main-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="photo__main js-main-photo">
              <img class="img-fluid" src="./src/image/1.jpg">
            </div>
          </div>
          <div class="col-12">
            <div class="owl-carousel owl-theme">
              <div class="item">
                <div class="js-main-photo-change photo__annotation active">
                  <img class="img-fluid" src="./src/image/1.jpg">
                </div>
              </div>
              <div class="item">
                <div class="js-main-photo-change photo__annotation">
                  <img class="img-fluid" src="./src/image/2.jpg">
                </div>
              </div>
              <div class="item">
                <div class="js-main-photo-change photo__annotation">
                  <img class="img-fluid" src="./src/image/3.jpg">
                </div>
              </div>
              <div class="item">
                <div class="js-main-photo-change photo__annotation">
                  <img class="img-fluid" src="./src/image/4.jpg">
                </div>
              </div>
              <div class="item">
                <div class="js-main-photo-change photo__annotation">
                  <img class="img-fluid" src="./src/image/5.jpg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
```

```js

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 30,
    responsive:{
        0:{
            items: 2,
            nav: false,
            loop: false
        },
        1024:{
            items: 4,
            nav: false,
            loop: false
        }
    }
})

$('.js-main-photo-change').click(function() {
    $(this).parents('.js-main-container').find('.js-main-photo-change').removeClass('active');
    $(this).parents('.js-main-container').find('.js-main-photo').find('img').attr('src', $(this).find('img').attr('src'))
    $(this).addClass('active');
})

```