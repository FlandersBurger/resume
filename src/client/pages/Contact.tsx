import { useState } from "react";
import { sendEmail } from "../services/email";
import { useApp } from "../context/AppContext";
import { Helmet } from "react-helmet-async";

const OPTIONS = [
  { name: "Spam", text: "I am a spam bot and automatically check the first option I find!" },
  { name: "Opportunity", text: "You seem to have the skills I seek, I'd like to talk about some opportunities." },
  { name: "Resume", text: "I dig the resume, how did you make it?" },
  { name: "Other", text: "Sumtin else!" },
];

export default function Contact() {
  const { toast } = useApp();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [contact, setContact] = useState({ email: "", name: "", phone: "", about: "", message: "" });

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
    <div id="contact-page">
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
      <h2>Contact</h2>
      {sent && (
        <h4>Thanks for dropping a line, I usually read my mails the same day unless I happen to be on holiday :)</h4>
      )}
      {!sent && (
        <form className="form-horizontal" onSubmit={handleSend}>
          <div className="form-group">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Phone</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="tel"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Subject</label>
            <div className="col-sm-10">
              <div className="btn-group btn-group-vertical" style={{ width: "100%" }}>
                {OPTIONS.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    className={`btn col-sm-12 ${contact.about === option.name ? "btn-primary" : "btn-default"}`}
                    style={{ marginBottom: 4, whiteSpace: "normal" }}
                    onClick={() => setContact({ ...contact, about: option.name })}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor="comment">
              Message
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                rows={5}
                id="comment"
                value={contact.message}
                onChange={(e) => setContact({ ...contact, message: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-lg btn-default btn-block" disabled={sending}>
                <i className={`fa ${sending ? "fa-spinner fa-spin" : "fa-paper-plane"}`} />{" "}
                {sending ? "Sending" : "Send"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
