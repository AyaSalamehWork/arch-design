import Card from "react-bootstrap/Card";

const BannerCard = (props) => {
    return (
        <Card>
            <Card.Img className="icon" src={props.imgUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default BannerCard;
