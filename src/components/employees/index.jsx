import ProfileGrid from 'components/common/ProfileGrid';
import useFetch from 'components/hooks/useFetch';
import { EMPLOYEES } from 'components/modules/api/endpoints';
import { selectAppState } from 'components/modules/app/selectors';
import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux';

function Employees() {
  const {response, performFetch} = useFetch(EMPLOYEES);
  const {loading, data} = response;
  const appState = useSelector(selectAppState);

	useEffect (()=> {
  	performFetch();
  }, [performFetch]);

  const preparedData = useMemo(()=> {
    if(!Array.isArray(data)) {
      return [];
    }

    if(!appState.selectedJob) {
      return data;
    }

    return data.filter(employee => employee.job === appState.selectedJob)
  },[data, appState.selectedJob])

  return (
	<ProfileGrid profiles={preparedData} loading={loading}/>
  )
}

export default Employees