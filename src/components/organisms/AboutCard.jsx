import { Card } from 'react-bootstrap';

function AboutCard({ title, text, list }) {
  return (
    <Card className="mb-4 ">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {list && (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
