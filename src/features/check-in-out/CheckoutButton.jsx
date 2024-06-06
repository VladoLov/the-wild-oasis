import Button from "../../ui/Button";

// eslint-disable-next-line react/prop-types
function CheckoutButton({ bookingId }) {
  return (
    <Button variation="primary" size="small">
      Check out
    </Button>
  );
}

export default CheckoutButton;
