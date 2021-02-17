import Autocomplete from './Autocomplete';
import usStates from './us-states';
import './main.css';
import GitUser from './GitUser'


// US States
const data = usStates.map(state => ({
  text: state.name,
  value: state.abbreviation
}));
new Autocomplete(document.getElementById('state'), {
  data,
  onSelect: (stateCode) => {
    console.log('selected state:', stateCode);
  },
});


// Github Users

new GitUser(document.getElementById('gh-user'), {
  onSelect: ghUserId => {
    console.log('selected github user id:', ghUserId)
  },
})

new GitUser(document.getElementById('gh-user-2'), {
  onSelect: ghUserId => {
    console.log('selected github user id:', ghUserId)
  },
})
