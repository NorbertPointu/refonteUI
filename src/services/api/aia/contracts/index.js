import dataProvider from '../../../dataProvider';

const contractUrl = 'insurance/contracts'

function search(searchField, searchValue) {
  return dataProvider.getOne(`${contractUrl}?${searchField}=${searchValue}`)
}

function getSearchOptions() {
  return dataProvider.getOne(`${contractUrl}?_num=1`)
    .then((data) => {
      const res = Object.keys(data.data._options.links[2].schema.properties)
        .filter((property) => (property.indexOf("_") !== 0 && property.indexOf("$") !== -1))
        .map((property) => { return { value: property, label: property } })
      return res
    })
    .catch((error) => {
      console.log('error', error);
      return [];
    });
}

const aiaContracts = { search, getSearchOptions }
export default aiaContracts
