import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Dialog from '../../components/Dialog/Dialog';
import {
    grey900
} from 'material-ui/styles/colors';

import {fetchSkillsPageData, clearSkillsPageData} from '../../actions/actions';

class SkillsPage extends Component {
    componentWillMount() {
        this.props.fetchSkillsPageData();
    }

    componentWillUnmount() {
        this.props.clearSkillsPageData();
    }

    renderBody = () => {
        const {skills} = this.props.skillsPage;
        return <Grid fluid style={{marginTop: "2rem", color: grey900}}>
            {Object.keys(skills).map(key => (
                <Row key={key}>
                    <Col lg={4} style={{fontWeight: "bold", marginBottom: 12}}>
                        {key}:
                    </Col>
                    <Col lg={8}>
                        {skills[key].join(', ')}
                    </Col>
                </Row>
            ))}
        </Grid>
    };

    render() {
        const {} = this.props;
        return (<Dialog title="Skills" body={this.renderBody()}/>)
    }
}

export default connect(
    state => ({
        skillsPage: state.skillsPage
    }),
    dispatch => ({
        fetchSkillsPageData: () => dispatch(fetchSkillsPageData()),
        clearSkillsPageData: () => dispatch(clearSkillsPageData())
    })
)(withRouter(SkillsPage));