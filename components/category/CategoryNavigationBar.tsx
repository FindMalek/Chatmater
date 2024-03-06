import { Drawer, DrawerTrigger } from "@/components/ui/Drawer";
import { Card, CardHeader, CardTitle } from "@component/ui/Card";

import { Icons } from "@component/ui/Icons";
import CategoryDrawer from "@component/category/CategoryDrawer";

export default function CategoryNavigationBar() {
  return (
    <Drawer>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between px-2 w-full">
            <div className="flex items-center">
              <DrawerTrigger>

                <Icons.chevronUp className="w-5 h-auto" />
              </DrawerTrigger>
            </div>

            <div className="text-center text-sm">Chatmater (0.1.0v)</div>

            <div className="flex justify-end">
              <DrawerTrigger>
                <Icons.add className="w-5 h-auto" />
              </DrawerTrigger>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
      <CategoryDrawer />
    </Drawer>
  );
}
