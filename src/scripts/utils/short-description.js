const shortDescription = {
  short(desc, length) {
    let sortDesc = '';
    if (desc.length >= 50) {
      sortDesc += `${desc.substr(0, length)}...`;
    } else {
      sortDesc += desc;
    }
    return sortDesc;
  },
};

export default shortDescription;
