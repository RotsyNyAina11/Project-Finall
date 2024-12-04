import PageHeader from "../PageHeader";
import  PeopleOutlineTwoToneIcon  from "@mui/icons-material/PeopleOutlineTwoTone";
import HistoryList from "./HistoryList";

const HistoryParent: React.FC = () => {
  

  return (
    <>
      <PageHeader title="Trade History"  icon={< PeopleOutlineTwoToneIcon/>}/>
      {/*<HistoryForm historyToUpdate={selectedHistory} clearSelectedhistory={clearSelectedHistory}/>*/}
      <HistoryList />
    </>
  );
};

export default HistoryParent;
