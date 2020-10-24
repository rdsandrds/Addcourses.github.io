import React from "react";
import { Card, CardBody } from "reactstrap";

function Header ({name,title}) {
    return(
        <div>
            <Card className="my-1 bg-success">
                <CardBody>
                <h1 className="text-center my-1">Welcome to My Site</h1>

                </CardBody>
            </Card>
        </div>
    );
}

export default Header;