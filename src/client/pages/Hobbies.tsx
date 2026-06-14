import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fadeInUp } from "../styles/animations";

const AnimatedButton = styled.button<{ $index: number }>`
  opacity: 0;
  animation: ${fadeInUp} 0.3s ease forwards;
  animation-delay: ${({ $index }) => $index * 60}ms;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

const ImageCell = styled.div<{ $index: number }>`
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: ${fadeInUp} 0.3s ease forwards;
  animation-delay: ${({ $index }) => Math.min($index * 30, 480)}ms;
`;

const HobbyImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 8px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  }
`;

interface HobbyImage {
  file: string;
  name?: string;
  url?: string;
}

interface Hobby {
  name: string;
  icon?: string;
  images?: HobbyImage[];
}

export default function Hobbies() {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [selected, setSelected] = useState<Hobby | null>(null);
  const { hobby } = useParams<{ hobby: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/hobbies.json")
      .then((r) => r.json())
      .then((data: Hobby[]) => {
        const withImages = data.filter((h) => h.images && h.images.length > 0);
        const shuffled = withImages.map((h) => ({
          ...h,
          images: [...(h.images ?? [])].sort(() => Math.random() - 0.5),
        }));
        setHobbies(shuffled);
        const match = shuffled.find((h) => h.name.toLowerCase() === (hobby ?? "reading")) ?? shuffled[0] ?? null;
        setSelected(match);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Hobbies — Laurent Debacker</title>
        <meta
          name="description"
          content="Hobbies and interests of Laurent Debacker: binge-watching, gaming, reading, surfing, and travelling."
        />
        <meta property="og:title" content="Hobbies — Laurent Debacker" />
        <meta property="og:url" content="https://belgocanadian.com/hobbies" />
        <link rel="canonical" href="https://belgocanadian.com/hobbies" />
      </Helmet>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24, justifyContent: "center" }}>
        {hobbies.map((hobby, i) => (
          <AnimatedButton
            key={hobby.name}
            $index={i}
            onClick={() => {
              setSelected(hobby);
              navigate(`/hobbies/${hobby.name.toLowerCase()}`);
            }}
            className={`btn btn-lg ${selected?.name === hobby.name ? "btn-primary" : "btn-default"}`}
          >
            {hobby.icon && <i className={`fa ${hobby.icon}`} style={{ marginRight: 8 }} />}
            {hobby.name}
          </AnimatedButton>
        ))}
      </div>

      {selected && (
        <ImageGrid key={selected.name}>
          {selected.images?.map((image, i) => (
            <ImageCell key={i} $index={i}>
              <a href={image.url} target="_blank" rel="noreferrer" style={{ display: "block" }}>
                <HobbyImage
                  src={`/hobbies/${selected.name.toLowerCase()}/${image.file}`}
                  alt={image.name ?? image.file}
                  className="img-rounded"
                  style={{ aspectRatio: "1", objectFit: "cover" }}
                />
              </a>
              <p
                style={{
                  fontSize: "0.8em",
                  textAlign: "center",
                  marginTop: 4,
                  wordBreak: "break-word",
                  minHeight: "2.4em",
                }}
              >
                {image.name ?? ""}
              </p>
            </ImageCell>
          ))}
        </ImageGrid>
      )}
    </>
  );
}
