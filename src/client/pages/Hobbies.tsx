import { useEffect, useState } from "react";

interface HobbyImage {
  file: string;
  url?: string;
}

interface Hobby {
  name: string;
  images?: HobbyImage[];
}

export default function Hobbies() {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);
  const [selectorVisible, setSelectorVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    fetch("/hobbies.json")
      .then((r) => r.json())
      .then((data: Hobby[]) => {
        setHobbies(data);
        const first = data.find((h) => h.images && h.images.length > 0);
        if (first) setSelectedHobby(first);
      });
  }, []);

  const showHobby = (h: Hobby) => !!(h.images && h.images.length > 0);

  return (
    <>
      <div id="images">
        {selectedHobby?.images?.map((image, i) => (
          <a key={i} href={image.url} target="_blank" rel="noreferrer">
            <img src={`/hobbies/${selectedHobby.name.toLowerCase()}/${image.file}`} alt={image.file} />
          </a>
        ))}
      </div>
      <div id="hobbies-page">
        <div id="hobby-selector-container" className="col-xs-12">
          {!selectorVisible && (
            <div id="hobby-toggler" className="col-xs-12" onClick={() => setSelectorVisible(true)}>
              <i
                className={`fa fa-4x ${hover ? "fa-arrow-down" : "fa-bars"}`}
                aria-hidden="true"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
            </div>
          )}
          {selectorVisible && (
            <div id="hobby-selector" className="col-xs-12">
              {hobbies.filter(showHobby).map((hobby) => (
                <div key={hobby.name} className="col-lg-2 col-md-3 col-sm-3 col-xs-6 hobby-panel">
                  <div
                    className={`hobby${selectedHobby === hobby ? " hobby-current" : ""}`}
                    onClick={() => { setSelectedHobby(hobby); setSelectorVisible(false); }}
                  >
                    <h3>{hobby.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
