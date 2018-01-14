export interface IMenu {
  label: string;
  route: string;
  permission: string[];
  icon: string;
  submenu?: [
    {
      label: string;
      route: string;
      permission: string[];
      icon: string;
    }
  ];
}
