import Card from "../component/elements/Card";
import MainLayout from "../component/layout/MainLayout";
const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Card title="Balances" />
        <Card title="&nbsp;" />
        <Card title="&nbsp;" />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Card />
        <Card />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;