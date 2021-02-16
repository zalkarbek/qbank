

const GET_REGION_BY_ID = (id) => {
  return {
    Q: 'SELECT * FROM sRegions WHERE id = :id',
    REPLACE: { id }
  };
};

const GET_ACTIVE_PROJECTS = (status) => {
  return {
    Q: 'SELECT * FROM projects WHERE status status = :status ',
    REPLACE: {
      status // status: 'active'
    }
  };
};

const GET_ACTIVE_PROJECTS_IN = (status) => {
  return {
    Q: 'SELECT * FROM projects WHERE status IN(:status) ',
    REPLACE: {
      status // status: ['active', 'inactive']
    }
  };
};

module.exports = {
  GET_REGION_BY_ID,
  GET_ACTIVE_PROJECTS,
  GET_ACTIVE_PROJECTS_IN
};
