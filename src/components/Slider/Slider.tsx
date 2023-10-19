import React from 'react';
import {
  Container,
  Content,
  Item,
  BoxButtons,
  Image,
} from './Slider.styles.ts';

type SliderProps = {
  slides: string[];
};

export const Slider = ({ slides }: SliderProps) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      const { width } = contentRef.current.getBoundingClientRect();
      setPosition(-(width * active));
    }
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <Container>
      <BoxButtons>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </BoxButtons>
      <Content
        ref={contentRef}
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {slides.map((slide) => {
          return (
            <Item key={Math.random()}>
              <Image
                src={`http://localhost:3000/${slide}`}
                alt='Imagem da publicação'
              />
            </Item>
          );
        })}
      </Content>
    </Container>
  );
};
