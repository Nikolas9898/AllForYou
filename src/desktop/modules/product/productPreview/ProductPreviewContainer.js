import React from "react";
import ImageGallery from 'react-image-gallery';
import ProductPreviewStyl from './ProductPreviewStyl.module.css';
import "react-image-gallery/styles/css/image-gallery.css";
function ProductPreviewContainer(props) {
  const images = [
    {
      original: 'https://www.technomani.bg/wp-content/uploads/2020/07/Eseed-KW19-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0-min.jpg',
      thumbnail: 'https://www.technomani.bg/wp-content/uploads/2020/07/Eseed-KW19-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0-min.jpg',
    },
    {
      original: 'https://www.technomani.bg/wp-content/uploads/2020/07/kw19-black-min.jpg',
      thumbnail: 'https://www.technomani.bg/wp-content/uploads/2020/07/kw19-black-min.jpg',
    },
    {
      original: 'https://www.technomani.bg/wp-content/uploads/2020/07/kw19-blue-min.jpg',
      thumbnail: 'https://www.technomani.bg/wp-content/uploads/2020/07/kw19-blue-min.jpg',
    },
    {
      original: 'https://www.technomani.bg/wp-content/uploads/2020/07/kw19-pink-min.jpg',
      thumbnail: 'https://www.technomani.bg/wp-content/uploads/2020/07/kw19-pink-min.jpg',
    },
    {
      original: 'https://awsassets.panda.org/img/gornilom_1024x683_446029.jpg',
      thumbnail: 'https://awsassets.panda.org/img/gornilom_1024x683_446029.jpg',
    }
  ];
  const product={
    name:'Смарт часовник ESEED W8 METAL ⌚',
    description:" Смарт часовник ESEED W8 предлага елегантен дизайн, множество функции, изключително удобен и много лек Закаленото стъкло дава увереност по време на носене. Подходящ за спорт, работа и всички други мероприятия, напълно универсален, страхотен избор – както за мъже, така и за жени. Метални верижки в различни цветове, който придават чувство на масивност и качество в часовника. Регулирането на верижката става изключително бързо и лесно благодарение на магнитно захващане. С този “smartwatch”със сигурност ще привлечете вниманието на околните. Батерия с голям капацитет и дълга издръжливост.",
    price:""
  }
  return (
    <div className={ProductPreviewStyl.container}>
       <div>
          <ImageGallery items={images} />
       </div>
          <h1>{product.name}</h1>
          <div className={ProductPreviewStyl.description_container}>
            <h3>Описание</h3>
            <p>
            {product.description}
            </p>
          </div>
          
    </div>

  );
}

export default ProductPreviewContainer;
