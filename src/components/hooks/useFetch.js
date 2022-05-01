import { useCallback, useMemo } from "react";
import camelCase from "camelcase";
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from "components/modules/api/action";
import { selectApiState } from "components/modules/api/selectors";

const useFetch = (endpoint) => {
  const dispatch = useDispatch();
  const apiState = useSelector(selectApiState);

  const performFetch = useCallback(
    (data) => dispatch(apiActions.fetch(endpoint, data)),
    [endpoint, dispatch]
  );
  const response = useMemo(
    () => apiState[camelCase(endpoint)],
    [apiState, endpoint]
  );

  return { response, performFetch };
};

export default useFetch;
