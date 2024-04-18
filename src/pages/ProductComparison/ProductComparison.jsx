import ProductSection from "../../components/ProductComparison/ProductSection/ProductSection";
import ProductComparisonTable from "../../components/ProductComparison/ProductComparisonTable/ProductComparisonTable";
import BenefitItem from "../../components/BenefitItem/BenefitItem";

function ProductComparison() {

  return (
    <div className="App">
      <ProductSection/>
      <ProductComparisonTable/>
      <BenefitItem/>
    </div>
  );
};

export default ProductComparison;
