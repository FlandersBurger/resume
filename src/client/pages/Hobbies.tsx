import { useEffect, useState } from "react";

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
        setSelected(shuffled[0] ?? null);
      });
  }, []);

  return (
    <div id="hobbies-page">
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {hobbies.map((hobby) => (
          <button
            key={hobby.name}
            onClick={() => setSelected(hobby)}
            className={`btn btn-lg ${selected?.name === hobby.name ? "btn-primary" : "btn-default"}`}
            style={{ flex: "1 1 auto", minWidth: 100 }}
          >
            {hobby.icon && <i className={`fa ${hobby.icon}`} style={{ marginRight: 8 }} />}
            {hobby.name}
          </button>
        ))}
      </div>

      {selected && (
        <div className="row">
          {selected.images?.map((image, i) => (
            <div key={i} className="col-lg-2 col-md-3 col-sm-4 col-xs-6" style={{ marginBottom: 16 }}>
              <a href={image.url} target="_blank" rel="noreferrer" style={{ display: "block" }}>
                <img
                  src={`/hobbies/${selected.name.toLowerCase()}/${image.file}`}
                  alt={image.name ?? image.file}
                  className="img-responsive img-rounded"
                  style={{ width: "100%", aspectRatio: "1", objectFit: "cover" }}
                />
              </a>
              {image.name && (
                <p style={{ fontSize: "0.8em", textAlign: "center", marginTop: 4, wordBreak: "break-word" }}>
                  {image.name}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
