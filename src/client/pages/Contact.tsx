import { useState } from "react";
import styled from "styled-components";
import { sendEmail } from "../services/email";
import { useApp } from "../context/AppContext";
import { Helmet } from "react-helmet-async";

const Page = styled.div`
  max-width: 540px;
  margin: 0 auto;
  padding: 24px 16px 40px;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  margin-bottom: 14px;
  label {
    display: block;
    font-size: 0.78em;
    font-weight: 600;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 5px;
  }
`;

const SubjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 14px;
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const SubjectCard = styled.button<{ $active: boolean }>`
  text-align: left;
  padding: 11px 13px;
  border: 1px solid ${(p) => (p.$active ? "#337ab7" : "#ddd")};
  border-radius: 6px;
  background: ${(p) => (p.$active ? "#f0f7ff" : "#fff")};
  cursor: pointer;
  width: 100%;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
  &:hover {
    border-color: #337ab7;
  }
`;

const SubjectLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 0.87em;
  margin-bottom: 4px;
  color: #333;
`;

const SubjectDesc = styled.div`
  font-size: 0.76em;
  color: #999;
  line-height: 1.35;
`;

const SuccessBox = styled.div`
  text-align: center;
  padding: 56px 0;
  i {
    display: block;
    font-size: 3em;
    color: #5cb85c;
    margin-bottom: 16px;
  }
  h4 {
    margin: 0 0 10px;
    font-size: 1.2em;
  }
  p {
    color: #999;
    margin: 0;
    font-size: 0.9em;
  }
`;

const OPTIONS = [
  {
    name: "Spam",
    icon: "fa fa-bug",
    text: "I am a spam bot and automatically check the first option I find!",
  },
  {
    name: "Opportunity",
    icon: "fa fa-briefcase",
    text: "You seem to have the skills I seek, I'd like to talk about some opportunities.",
  },
  {
    name: "Resume",
    icon: "fa fa-file-text",
    text: "I dig the resume, how did you make it?",
  },
  {
    name: "Other",
    icon: "fa fa-question-circle",
    text: "Sumtin else!",
  },
];

export default function Contact() {
  const { toast } = useApp();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [contact, setContact] = useState({ email: "", name: "", phone: "", about: "Spam", message: "" });

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendEmail(contact);
      toast("Message sent");
      setSent(true);
    } catch {
      toast("Message send failed");
      setSending(false);
    }
  };

  return (
    <Page>
      <Helmet>
        <title>Contact — Laurent Debacker</title>
        <meta
          name="description"
          content="Get in touch with Laurent Debacker — available for full stack development opportunities in Canada and remotely."
        />
        <meta property="og:title" content="Contact — Laurent Debacker" />
        <meta
          property="og:description"
          content="Get in touch with Laurent Debacker — available for full stack development opportunities."
        />
        <meta property="og:url" content="https://belgocanadian.com/contact" />
        <link rel="canonical" href="https://belgocanadian.com/contact" />
      </Helmet>

      {sent ? (
        <SuccessBox>
          <i className="fa fa-check-circle" />
          <h4>Message sent!</h4>
          <p>Thanks for dropping a line — I usually read my emails the same day unless I happen to be on holiday :)</p>
        </SuccessBox>
      ) : (
        <form onSubmit={handleSend}>
          <FieldRow>
            <Field>
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
              />
            </Field>
            <Field>
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
              />
            </Field>
          </FieldRow>

          <Field>
            <label>Phone</label>
            <input
              className="form-control"
              type="tel"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            />
          </Field>

          <Field>
            <label>Subject</label>
            <SubjectGrid>
              {OPTIONS.map((option) => (
                <SubjectCard
                  key={option.name}
                  type="button"
                  $active={contact.about === option.name}
                  onClick={() => setContact({ ...contact, about: option.name })}
                >
                  <SubjectLabel>
                    <i className={option.icon} />
                    {option.name}
                  </SubjectLabel>
                  <SubjectDesc>{option.text}</SubjectDesc>
                </SubjectCard>
              ))}
            </SubjectGrid>
          </Field>

          <Field>
            <label>Message</label>
            <textarea
              className="form-control"
              rows={5}
              value={contact.message}
              onChange={(e) => setContact({ ...contact, message: e.target.value })}
            />
          </Field>

          <button type="submit" className="btn btn-default btn-block btn-lg" disabled={sending}>
            <i className={`fa ${sending ? "fa-spinner fa-spin" : "fa-paper-plane"}`} /> {sending ? "Sending…" : "Send"}
          </button>
        </form>
      )}
    </Page>
  );
}
