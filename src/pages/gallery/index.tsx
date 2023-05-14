import React, { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import HexImage from "../../components/image";
import './gallery.scss';

const dataRow = (
    <Row className="gallery-row">
        <Col className="hex col-sm-2"><HexImage /></Col>
        <Col className="hex col-sm-2"><HexImage /></Col>
        <Col className="hex col-sm-2"><HexImage /></Col>
        <Col className="hex col-sm-2"><HexImage /></Col>
        <Col className="hex col-sm-2"><HexImage /></Col>
        <Col className="hex col-sm-2"><HexImage /></Col>
        <Col className="hex col-sm-2 new-line new-line-1"><HexImage /></Col>
        <Col className="hex col-sm-2 new-line new-line-2"><HexImage /></Col>
        <Col className="hex col-sm-2 new-line new-line-3"><HexImage /></Col>
        <Col className="hex col-sm-2 new-line new-line-4"><HexImage /></Col>
        <Col className="hex col-sm-2 new-line new-line-5"><HexImage /></Col>
    </Row>
);

class Gallery extends React.Component<{}, { dataList: ReactNode[] }> {

    constructor(props: {}) {
        super(props);
        this.state = { dataList: [dataRow] };
        this.addRow = this.addRow.bind(this);
    }

    addRow() {
        this.setState({ dataList: this.state.dataList.concat(dataRow) });
    }

    render() {
        return (
            <Container>
                {this.state.dataList}
                <Row className="gallery-row load-more">
                    <Button onClick={this.addRow} style={{ width: '20%', background: '#b79e41' }}>
                        LOAD MORE...
                    </Button>
                </Row>
            </Container>
        );
    }
}

export default Gallery;
