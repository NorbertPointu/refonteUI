import aia from '../../plugins/aia';

// eslint-disable-next-line import/prefer-default-export
async function getOne(Resource) {
  return aia.get(Resource)
}

const dataProvider = { getOne }

export default dataProvider
