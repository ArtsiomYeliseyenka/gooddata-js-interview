export const getPeriodFilter = ({ period: { from, to }, uri }) => {
  return {
    absoluteDateFilter: {
      dataSet: {
        uri,
      },
      from,
      to,
    },
  };
};

export const getMeasures = ({ uri, localIdentifier, alias }) => {
  return [
    {
      measure: {
        localIdentifier,
        definition: {
          measureDefinition: {
            item: {
              uri,
            },
          },
        },
        alias,
      },
    },
  ];
};

export const getViewBy = ({ uri, localIdentifier }) => {
  return {
    visualizationAttribute: {
      displayForm: {
        uri,
      },
      localIdentifier,
    },
  };
};
