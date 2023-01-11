import {
  Table,
  Button,
  Box,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { OrdersItemTypes } from "../../../../assets/data/OrderdetailsData";
import classNames from "classnames";
import "../../../../styles/pages/Ecommerce.css";
import { IconUpload } from "@tabler/icons";

interface OrdersProps {
  orderDetails: OrdersItemTypes[];
}

const RecentOrdersTable = ({ orderDetails }: OrdersProps) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
        border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
        padding: "20px",
        minHeight: "100%",
      }}
    >
      <div
        style={{
          color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
          alignItems: "flex-start",
          padding: "0px",
          marginBottom: "24px",
        }}
        className="cards_header"
      >
        <h5>recent orders</h5>
        <Button leftIcon={<IconUpload size={14} />}>Export</Button>
      </div>

      <div className="ordersTable">
        <Table verticalSpacing="sm">
          <thead
            style={{
              color: dark ? theme.colors.grey200[6] : theme.colors.grey700[4],
            }}
          >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Customer</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {(orderDetails || []).map((item, index) => {
              return (
                <tr
                  style={{
                    color: dark
                      ? theme.colors.grey100[6]
                      : theme.colors.grey600[4],
                  }}
                  key={index}
                >
                  <td>#{item.id}</td>
                  <td>{item.product}</td>
                  <td>{item.customer}</td>
                  <td>{item.price}</td>
                  <td>
                    <span
                      className={classNames({
                        "badge-pending": item.status === "Pending",
                        "badge-success": item.status === "Delivered",
                        "badge-failed": item.status === "Declined",
                      })}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Box>
  );
};

export default RecentOrdersTable;
