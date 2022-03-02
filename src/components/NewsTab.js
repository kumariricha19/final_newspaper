import React, { useState } from "react"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from 'react-bootstrap/Dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip';


function NewsTab({ data }) {
    const [readMore, setReadMore] = useState(false)

    function handleClick() {
        setReadMore(!readMore)
    }
    // card horizontal when clicked read more
    function cardHorizontal() {
        if (readMore) {
            return "card-horizontal"
        } else {
            return "card-horizontal-hide"
        }
    }


    return (
        <> 
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={data.Image_Link} />
                <Card.Body>
                    <Card.Title>{data.Headline}</Card.Title>
                    <Card.Text>
                        {!readMore ? (
                            <div>
                                <p>{data.News.slice(0, 200)}...</p>
                                <OverlayTrigger
                                        delay={{ hide: 450, show: 300 }}
                                        overlay={(props) => (
                                            <Tooltip {...props}>
                                                Click here to see full article
                                            </Tooltip>
                                        )}
                                        placement="right">
                                    <Button variant="warning" onClick={handleClick}>Read More</Button>
                                    </OverlayTrigger>
                            </div>
                        ) : (
                            <div>
                                <p>{data.News}</p>
                                <Button variant="success" onClick={handleClick}>Read Less</Button>
                            </div>
                        )}
                    </Card.Text>
                    <Button variant="primary" a href={data.Hyperlink}>HyperLink</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default NewsTab;