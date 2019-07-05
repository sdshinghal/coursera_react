// import React from 'react';
// import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap'
// import classnames from 'classnames';
//
// export default class Example extends React.Component {
//     constructor(props) {
//         super(props);
//
//
//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             activeTab: '1'
//         };
//     }
//
//     toggle(tab) {
//         if (this.state.activeTab !== tab) {
//             this.setState({
//                 activeTab: tab
//             });
//         }
//     }
//
//     render() {
//         return(
//             <div>
//                 <Nav tabs>
//                     <NavItem>
//                         <NavLink
//                         className={classnames({active: this.state.activeTab === '1'})}
//                         onClick={()=> {this.toggle('1'); }}
//                         >
//                             Tab1
//                         </NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink classNam={classnames({active:this.state.activeTab ==='2'})}
//                         >
//                             Second Tab
//
//                         </NavLink>
//                     </NavItem>
//                 </Nav>
//
//                 <TabContent activeTab={this.state.activeTab}>
//                     <TabPane tabId="1">
//                         <Row>
//                             <Col sm="12">
//                                 <h4>Tab 1 Contents</h4>
//                             </Col>
//                         </Row>
//                     </TabPane>
//                     <TabPane tabId="2">
//                         <Row>
//                             <Col sm="6">
//                                 <h4>Tab 2 Contents</h4>
//                             </Col>
//                         </Row>
//
//                     </TabPane>
//
//                 </TabContent>
//             </div>
//         );
//     }
// }
//
//
//

import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import InnerTab from './inner_tab';

export default class TabExample extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            OuterTab1
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            OuterTab2
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <InnerTab/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
