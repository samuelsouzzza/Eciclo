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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
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
      <Content
        ref={contentRef}
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        <BoxButtons
          style={{
            transform: `translateX(${position}px)`,
          }}
        >
          <button onClick={slidePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={slideNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </BoxButtons>
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
