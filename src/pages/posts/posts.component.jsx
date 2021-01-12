//POSTS.COMPONENT EQUALS SHOP.COMPONENT
import React from 'react';
import { Route } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import './posts.styles.scss'; 

import { 
    firestore, 
    convertPublicationsSnapshotToMap
 } from '../../firebase/firebase.utils'; 

import { updatePublications } from '../../redux/posts/posts.actions'; 

import WithSpinner from '../../components/with-spinner/with-spinner.component'; 

import PublicationsOverview from '../../components/publications-overview/publications-overview.component'; 
import PublicationPage from '../../pages/publication/publication.component'; 

const PublicationsOverviewWithSpinner = WithSpinner(PublicationsOverview); 
const PublicationPageWithSpinner = WithSpinner(PublicationPage); 

class PostsPage extends React.Component {
    state = {
        loading: true 
    }

    unsubscribeFromSnapshot = null; 

    componentDidMount() {
        const { updatePublications } = this.props; 

        const publicationsRef = firestore.collection('publications'); 

        this.unsubscribeFromSnapshot = publicationsRef.onSnapshot(async snapshot => {
            const publicationsMap = convertPublicationsSnapshotToMap(snapshot);
            
            updatePublications(publicationsMap); 

            this.setState({ loading: false })
        }); 
    }

    render() {
        const { match } = this.props; 
        const { loading } = this.state; 
        return (
            <div className='post-page'>
                <div className='post-page-content'>
                    <Route 
                        exact 
                        path={`${match.path}`} 
                        render={ props => (
                            <PublicationsOverviewWithSpinner
                                isLoading={loading}
                                {...props} />
                        )}
                        /> 
                    <Route 
                        path={`${match.path}/:publicationId`} 
                        render={ props => (
                            <PublicationPageWithSpinner 
                                isLoading={loading}
                                {...props}
                            />
                        )}
                    /> 
                </div>
            </div>
        ); 
    }

}

const mapDispatchToProps = dispatch => ({
    updatePublications: publicationsMap => dispatch(updatePublications(publicationsMap))
})

export default connect(
    null, 
    mapDispatchToProps
    )(PostsPage); 