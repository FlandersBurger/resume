import styled from "styled-components";
import { Helmet } from "react-helmet-async";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ingredients = [
  "1.5 kg beef chuck, cut into large chunks",
  "8 large onions, peeled and diced",
  "6 carrots, peeled and cut diagonally",
  "4 × 330 ml Belgian dark beer (e.g. Leffe Brune)",
  "200 g prunes",
  "150 g butter",
  "3 tbsp flour",
  "1 tbsp Dijon mustard",
  "Fresh thyme + 2 bay leaves",
  "Salt and pepper to taste",
  "200 ml water (for deglazing)",
];

const steps: { text: string; photos: number[] }[] = [
  {
    text: "Gather all ingredients: beef, onions, carrots, Belgian dark beer, prunes, butter, flour, mustard, and a bouquet of fresh thyme and bay leaves.",
    photos: [1],
  },
  {
    text: "Peel the carrots and cut them diagonally into thick pieces. Peel and dice the onions.",
    photos: [2, 3],
  },
  {
    text: "Cut the beef into large chunks (~5 cm). Season generously with salt and pepper.",
    photos: [5],
  },
  {
    text: "Melt butter in a large frying pan over high heat. Sear the beef in batches — don't crowd the pan — until deeply browned on all sides. Transfer each batch to your dutch oven.",
    photos: [9, 10],
  },
  {
    text: "Deglaze the hot pan with the water, scraping up all the caramelized bits. Pour this liquid into the dutch oven over the beef.",
    photos: [11, 12],
  },
  {
    text: "Add more butter to the pan and sauté the diced onions with the thyme and bay leaves over medium heat until soft and translucent.",
    photos: [14],
  },
  {
    text: "Pour all 4 bottles of beer over the onions. Let bubble and reduce for a few minutes.",
    photos: [15],
  },
  {
    text: "Sprinkle the flour over the beef in the dutch oven and stir well to coat each piece evenly.",
    photos: [18],
  },
  {
    text: "Pour the beer-onion mixture over the beef. Add a generous spoonful of Dijon mustard and stir everything together.",
    photos: [20],
  },
  {
    text: "In the same pan, melt the remaining butter and sauté the carrots until lightly glazed. Add the carrots and prunes to the dutch oven and stir to combine.",
    photos: [22, 24],
  },
  {
    text: "Cover with the lid and place in the oven at 130 °C (265 °F) for 1 hour 30 minutes.",
    photos: [26, 27],
  },
  {
    text: "Remove from the oven. The stew should be rich, deeply flavored, and the beef fall-apart tender. Serve hot, garnished with fresh parsley.",
    photos: [31],
  },
];

// ─── Styled ───────────────────────────────────────────────────────────────────

const Page = styled.div`
  max-width: 740px;
  margin: 0 auto;
  padding: 0 16px 60px;
`;

const Hero = styled.img`
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
  display: block;
  margin-bottom: 24px;
`;

const RecipeTitle = styled.h2`
  margin-bottom: 4px;
`;

const Tagline = styled.p`
  color: #777;
  font-size: 0.95em;
  margin-bottom: 16px;
`;

const Meta = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  font-size: 0.85em;
  color: #888;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  i {
    font-size: 0.95em;
  }
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding: 16px 20px;
  margin-bottom: 28px;
`;

const CardTitle = styled.h5`
  margin: 0 0 12px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #888;
  font-weight: 700;
`;

const IngredientGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 24px;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Ingredient = styled.li`
  font-size: 0.9em;
  color: #444;
  display: flex;
  align-items: baseline;
  gap: 7px;
  &::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ccc;
    flex-shrink: 0;
    position: relative;
    top: -1px;
  }
`;

const SectionLabel = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.72em;
  color: #aaa;
  margin: 0 0 16px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eee;
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const StepRow = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  &:last-child {
    border-bottom: none;
  }
`;

const StepNum = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #337ab7;
  color: #fff;
  font-size: 0.78em;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
`;

const StepBody = styled.div`
  flex: 1;
`;

const StepText = styled.p`
  font-size: 0.93em;
  color: #333;
  line-height: 1.6;
  margin: 0 0 12px;
`;

const PhotoRow = styled.div<{ $count: number }>`
  display: grid;
  grid-template-columns: ${(p) => (p.$count > 1 ? "1fr 1fr" : "1fr")};
  gap: 8px;
`;

const StepPhoto = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #ddd;
  display: block;
  @media (max-width: 480px) {
    height: 160px;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Stew() {
  return (
    <Page>
      <Helmet>
        <title>Belgian Beef Stew — Laurent Debacker</title>
        <meta
          name="description"
          content="Carbonnade Flamande — Belgian beer-braised beef with onions, carrots and prunes."
        />
      </Helmet>

      <Hero src="/recipes/stew/32.jpg" alt="Belgian beef stew in the pot" />

      <RecipeTitle>Belgian Beef Stew</RecipeTitle>
      <Tagline>Carbonnade Flamande — beer-braised beef with caramelized onions, carrots & prunes</Tagline>

      <Meta>
        <MetaItem>
          <i className="fa fa-clock-o" /> 2.5 hours
        </MetaItem>
        <MetaItem>
          <i className="fa fa-users" /> 6 servings
        </MetaItem>
        <MetaItem>
          <i className="fa fa-thermometer-half" /> 130 °C oven
        </MetaItem>
      </Meta>

      <Card>
        <CardTitle>Ingredients</CardTitle>
        <IngredientGrid>
          {ingredients.map((ing) => (
            <Ingredient key={ing}>{ing}</Ingredient>
          ))}
        </IngredientGrid>
      </Card>

      <SectionLabel>Method</SectionLabel>

      <StepList>
        {steps.map((step, i) => (
          <StepRow key={i}>
            <StepNum>{i + 1}</StepNum>
            <StepBody>
              <StepText>{step.text}</StepText>
              {step.photos.length > 0 && (
                <PhotoRow $count={step.photos.length}>
                  {step.photos.map((n) => (
                    <StepPhoto key={n} src={`/recipes/stew/${n}.jpg`} alt={`Step ${i + 1}`} loading="lazy" />
                  ))}
                </PhotoRow>
              )}
            </StepBody>
          </StepRow>
        ))}
      </StepList>
    </Page>
  );
}
