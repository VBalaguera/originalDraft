import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'; 

import { 
  firestore, 
  convertCollectionsSnapshotToMap
 } from '../../firebase/firebase.utils'; 

import { updateCollections } from '../../redux/shop/shop.actions'; 

// 1: 
import WithSpinner from '../../components/with-spinner/with-spinner.component'; 

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// 4: new comp: 
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); // this returns a new comp with a wrapped comp I passed in (CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component {
  // 2: setting isLoading value to true/false
  /* SHORTHAND EXAMPLE: 
  constructor() {
    super(); 

    this.state = {
      loading: true
    }
  }*/
  // shorter way, constructor and super will be handled in the backend by react; avoids redundancy; both ROUTE COMPS are the ones that need this loading state
  state = {
    loading: true
  }; 

  unsubscribeFromSnapshot = null; 

  componentDidMount() {
    const { updateCollections } = this.props; 

    const collectionRef = firestore.collection('collections'); 

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => { 

      const collectionsMap = convertCollectionsSnapshotToMap(snapshot); 

      updateCollections(collectionsMap); 

      // 3: after mounting/loading is finished: 
      this.setState({ loading: false }); 
    }); 


  }

  render() {
    const { match } = this.props; 
    // 5. destructuring loading value: 
    const { loading } = this.state; 
    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          render={ props => 
          ( <CollectionsOverviewWithSpinner 
              isLoading={loading} 
              {...props} /> 
          )}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={ props  => (
          <CollectionPageWithSpinner isLoading={loading} {...props} /> 
          )} 
        />
      </div>
    );
  }
} 
// 4. render is a method that takes a function where the pars and the funct are pretty much the pars that the comp will receive; in this case: match location and history props that Route passes into the comps. Said match is the one that gave access to the match {object} inside the selector on collection.component: 
/*
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
*/

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => 
  dispatch(updateCollections(collectionsMap))
})

export default connect(
  null, 
  mapDispatchToProps
  )(ShopPage);
