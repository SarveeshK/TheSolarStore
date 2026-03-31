import BuiltForRoofSection from '@/views/sections/BuiltForRoofSection';
import PanelCatalogSection from '@/views/sections/PanelCatalogSection';
import BatterySection from '@/views/sections/BatterySection';
import MonitorSection from '@/views/sections/MonitorSection';
import DurabilitySection from '@/views/sections/DurabilitySection';

const ProductsPage = () => {
  return (
    <>
      <BuiltForRoofSection />
      <PanelCatalogSection />
      <BatterySection />
      <MonitorSection />
      <DurabilitySection />
    </>
  );
};

export default ProductsPage;
