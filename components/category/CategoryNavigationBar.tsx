import { Drawer, DrawerTrigger } from "@/components/ui/Drawer";
import { Card, CardHeader, CardTitle } from "@components/ui/Card";

import { Icons } from "@/components/Icons";
import CategoryDrawer from "@components/category/CategoryDrawer";

export default function CategoryNavigationBar() {
  return (
    <Drawer>
      <Card>
        <CardHeader>
          <CardTitle>
            <DrawerTrigger className="flex items-center space-x-4 text-lg font-normal px-4">
              <Icons.menu className="w-10 h-auto hover:bg-slate-200/15 transition-colors duration-200 ease-in-out p-1.5 rounded-md" />
              <span className="hover:font-medium">
                Message categories
              </span>
            </DrawerTrigger>
            <CategoryDrawer />
          </CardTitle>
        </CardHeader>
      </Card>
    </Drawer>
  );
}
