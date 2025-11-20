import { Card } from 'react-bootstrap';

function BlogCard({ title, description, image, onClick }) {
  return (
    <Card style={{ width: '20rem' }} className="m-3 shadow-sm" onClick={onClick}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
