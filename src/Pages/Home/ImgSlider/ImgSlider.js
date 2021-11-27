import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const data = [
    {
      image:
        "https://www.thesun.co.uk/wp-content/uploads/2020/03/Baby_matjpg-JS463587323.jpg",
      caption: `<div>
      As men get older, the toys get more expensive
      </div>`,
    },
    {
      image:
        "https://post.healthline.com/wp-content/uploads/2019/06/Mother_Toy_Baby_Store-1200x628-Facebook.jpg",
      caption: "<div>Toys are put on this Earth to be played with by a child</div>",
    },
    {
      image:
        "https://cf.ltkcdn.net/baby/images/orig/243290-1600x1030-coolest-baby-toys-market.jpg",
      caption: "<div>Men are ruled by toys</div>",
    },
    {
      image:
        "https://www.sheknows.com/wp-content/uploads/2020/04/best-baby-toys-amazon.jpg",
      caption: "<div>To a real child anything will serve as a toy</div>",
    },
    {
      image:
        "https://raisingchildren.net.au/__data/assets/image/0033/48957/playgroupsnarrow.jpg",
      caption: "<div>Sports is the toy department of life</div>",
    },
    
    {
      image:
        "https://i.ytimg.com/vi/aIJSpW2pQ80/maxresdefault.jpg",
      caption: "<div>How Child Coomunicate a toy </div>",
    }
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
const ImgSlider = () => {
    return (
        <div>
             <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 10px",
          }}
        >
          <Carousel
            data={data}
            time={2200}
            width="850x"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
        </div>
    );
};

export default ImgSlider;