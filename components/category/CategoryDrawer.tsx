import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@components/ui/Drawer";
import { Button } from "@components/ui/Button";

import CategoryCard from "@components/category/CategoryCard";

export default function CategoryDrawer() {
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Message categories</DrawerTitle>
        <DrawerDescription>
          Select a category to view messages
        </DrawerDescription>
      </DrawerHeader>

      <div className="p-4 grid grid-cols-2 gap-2 overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-200/20">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>

      <DrawerFooter>
        <DrawerClose>
          <Button className="w-full">Done</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
}
