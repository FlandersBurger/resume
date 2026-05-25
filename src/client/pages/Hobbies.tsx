import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const HobbiesPage = styled.div``;

const HobbyImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 8px;
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
    <HobbiesPage>
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
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {hobbies.map((hobby) => (
          <button
            key={hobby.name}
            onClick={() => {
              setSelected(hobby);
              navigate(`/hobbies/${hobby.name.toLowerCase()}`);
            }}
            className={`btn btn-lg ${selected?.name === hobby.name ? "btn-primary" : "btn-default"}`}
            style={{ flex: "1 1 auto", minWidth: 100 }}
          >
            {hobby.icon && <i className={`fa ${hobby.icon}`} style={{ marginRight: 8 }} />}
            {hobby.name}
          </button>
        ))}
      </div>

      {selected && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 16 }}>
          {selected.images?.map((image, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column" }}>
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
            </div>
          ))}
        </div>
      )}
    </HobbiesPage>
  );
}
