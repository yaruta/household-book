import MonthlyTable from "../components/TableSection/MonthlyTable";
import MonthlyBalance from "../components/TableSection/MontlyBalance";
import Button from "../components/UI/Button";
import Section from "../components/UI/Section";

function TablePage() {
  return (
    <>
      <Section className="flex justify-between items-center gap-12 mt-8">
        <MonthlyBalance />
        <div className="w-50% flex justify-center items-center mr-8">
          <Button>Add new item</Button>
        </div>
      </Section>

      <MonthlyTable />
    </>
  );
}

export default TablePage;
