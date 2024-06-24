import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={onClose} primary>I Accept</Button>
    </div>
  );
  const modal = (
    <Modal onClose={onClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ipsum vitae viverra malesuada. Vestibulum varius pharetra velit eu rhoncus. Praesent accumsan mi at neque molestie fermentum. Morbi laoreet, orci in molestie laoreet, mi ex mattis arcu, eget gravida nulla magna mattis erat. Nulla egestas lorem a massa pellentesque scelerisque. Nam accumsan augue at risus lacinia, et dignissim leo eleifend. Sed lacinia sem ac accumsan feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices ultrices tellus sed consectetur. Integer in nulla quis elit imperdiet bibendum eget at elit. Sed pulvinar augue id mi aliquet, ac ultrices ligula convallis. Donec eu pretium erat. Ut sit amet scelerisque elit. In venenatis quam at vestibulum tempus. Quisque laoreet metus vel ornare dignissim. Pellentesque iaculis elit eu purus cursus dignissim.

Donec congue libero sed mi egestas convallis. Sed sed tortor sed nisi scelerisque mattis id et mi. Donec tempor ipsum et eros dignissim, vitae tempus justo accumsan. Nam sit amet aliquam ex. Donec at urna nec ex feugiat tristique. Integer consectetur ultricies leo a venenatis. Nunc aliquam, nisl eget pharetra feugiat, ligula velit placerat libero, a scelerisque mauris turpis sed sapien.

Nullam luctus bibendum lacus, ac dignissim j
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ipsum vitae viverra malesuada. Vestibulum varius pharetra velit eu rhoncus. Praesent accumsan mi at neque molestie fermentum. Morbi laoreet, orci in molestie laoreet, mi ex mattis arcu, eget gravida nulla magna mattis erat. Nulla egestas lorem a massa pellentesque scelerisque. Nam accumsan augue at risus lacinia, et dignissim leo eleifend. Sed lacinia sem ac accumsan feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices ultrices tellus sed consectetur. Integer in nulla quis elit imperdiet bibendum eget at elit. Sed pulvinar augue id mi aliquet, ac ultrices ligula convallis. Donec eu pretium erat. Ut sit amet scelerisque elit. In venenatis quam at vestibulum tempus. Quisque laoreet metus vel ornare dignissim. Pellentesque iaculis elit eu purus cursus dignissim.

Donec congue libero sed mi egestas convallis. Sed sed tortor sed nisi scelerisque mattis id et mi. Donec tempor ipsum et eros dignissim, vitae tempus justo accumsan. Nam sit amet aliquam ex. Donec at urna nec ex feugiat tristique. Integer consectetur ultricies leo a venenatis. Nunc aliquam, nisl eget pharetra feugiat, ligula velit placerat libero, a scelerisque mauris turpis sed sapien.

Nullam luctus bibendum lacus, ac dignissim j
      </p><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ipsum vitae viverra malesuada. Vestibulum varius pharetra velit eu rhoncus. Praesent accumsan mi at neque molestie fermentum. Morbi laoreet, orci in molestie laoreet, mi ex mattis arcu, eget gravida nulla magna mattis erat. Nulla egestas lorem a massa pellentesque scelerisque. Nam accumsan augue at risus lacinia, et dignissim leo eleifend. Sed lacinia sem ac accumsan feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices ultrices tellus sed consectetur. Integer in nulla quis elit imperdiet bibendum eget at elit. Sed pulvinar augue id mi aliquet, ac ultrices ligula convallis. Donec eu pretium erat. Ut sit amet scelerisque elit. In venenatis quam at vestibulum tempus. Quisque laoreet metus vel ornare dignissim. Pellentesque iaculis elit eu purus cursus dignissim.

Donec congue libero sed mi egestas convallis. Sed sed tortor sed nisi scelerisque mattis id et mi. Donec tempor ipsum et eros dignissim, vitae tempus justo accumsan. Nam sit amet aliquam ex. Donec at urna nec ex feugiat tristique. Integer consectetur ultricies leo a venenatis. Nunc aliquam, nisl eget pharetra feugiat, ligula velit placerat libero, a scelerisque mauris turpis sed sapien.

Nullam luctus bibendum lacus, ac dignissim j
      </p><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ipsum vitae viverra malesuada. Vestibulum varius pharetra velit eu rhoncus. Praesent accumsan mi at neque molestie fermentum. Morbi laoreet, orci in molestie laoreet, mi ex mattis arcu, eget gravida nulla magna mattis erat. Nulla egestas lorem a massa pellentesque scelerisque. Nam accumsan augue at risus lacinia, et dignissim leo eleifend. Sed lacinia sem ac accumsan feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices ultrices tellus sed consectetur. Integer in nulla quis elit imperdiet bibendum eget at elit. Sed pulvinar augue id mi aliquet, ac ultrices ligula convallis. Donec eu pretium erat. Ut sit amet scelerisque elit. In venenatis quam at vestibulum tempus. Quisque laoreet metus vel ornare dignissim. Pellentesque iaculis elit eu purus cursus dignissim.

Donec congue libero sed mi egestas convallis. Sed sed tortor sed nisi scelerisque mattis id et mi. Donec tempor ipsum et eros dignissim, vitae tempus justo accumsan. Nam sit amet aliquam ex. Donec at urna nec ex feugiat tristique. Integer consectetur ultricies leo a venenatis. Nunc aliquam, nisl eget pharetra feugiat, ligula velit placerat libero, a scelerisque mauris turpis sed sapien.

Nullam luctus bibendum lacus, ac dignissim j
      </p><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ipsum vitae viverra malesuada. Vestibulum varius pharetra velit eu rhoncus. Praesent accumsan mi at neque molestie fermentum. Morbi laoreet, orci in molestie laoreet, mi ex mattis arcu, eget gravida nulla magna mattis erat. Nulla egestas lorem a massa pellentesque scelerisque. Nam accumsan augue at risus lacinia, et dignissim leo eleifend. Sed lacinia sem ac accumsan feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices ultrices tellus sed consectetur. Integer in nulla quis elit imperdiet bibendum eget at elit. Sed pulvinar augue id mi aliquet, ac ultrices ligula convallis. Donec eu pretium erat. Ut sit amet scelerisque elit. In venenatis quam at vestibulum tempus. Quisque laoreet metus vel ornare dignissim. Pellentesque iaculis elit eu purus cursus dignissim.

Donec congue libero sed mi egestas convallis. Sed sed tortor sed nisi scelerisque mattis id et mi. Donec tempor ipsum et eros dignissim, vitae tempus justo accumsan. Nam sit amet aliquam ex. Donec at urna nec ex feugiat tristique. Integer consectetur ultricies leo a venenatis. Nunc aliquam, nisl eget pharetra feugiat, ligula velit placerat libero, a scelerisque mauris turpis sed sapien.

Nullam luctus bibendum lacus, ac dignissim j
      </p><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ipsum vitae viverra malesuada. Vestibulum varius pharetra velit eu rhoncus. Praesent accumsan mi at neque molestie fermentum. Morbi laoreet, orci in molestie laoreet, mi ex mattis arcu, eget gravida nulla magna mattis erat. Nulla egestas lorem a massa pellentesque scelerisque. Nam accumsan augue at risus lacinia, et dignissim leo eleifend. Sed lacinia sem ac accumsan feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices ultrices tellus sed consectetur. Integer in nulla quis elit imperdiet bibendum eget at elit. Sed pulvinar augue id mi aliquet, ac ultrices ligula convallis. Donec eu pretium erat. Ut sit amet scelerisque elit. In venenatis quam at vestibulum tempus. Quisque laoreet metus vel ornare dignissim. Pellentesque iaculis elit eu purus cursus dignissim.

Donec congue libero sed mi egestas convallis. Sed sed tortor sed nisi scelerisque mattis id et mi. Donec tempor ipsum et eros dignissim, vitae tempus justo accumsan. Nam sit amet aliquam ex. Donec at urna nec ex feugiat tristique. Integer consectetur ultricies leo a venenatis. Nunc aliquam, nisl eget pharetra feugiat, ligula velit placerat libero, a scelerisque mauris turpis sed sapien.

Nullam luctus bibendum lacus, ac dignissim j
      </p><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ipsum vitae viverra malesuada. Vestibulum varius pharetra velit eu rhoncus. Praesent accumsan mi at neque molestie fermentum. Morbi laoreet, orci in molestie laoreet, mi ex mattis arcu, eget gravida nulla magna mattis erat. Nulla egestas lorem a massa pellentesque scelerisque. Nam accumsan augue at risus lacinia, et dignissim leo eleifend. Sed lacinia sem ac accumsan feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices ultrices tellus sed consectetur. Integer in nulla quis elit imperdiet bibendum eget at elit. Sed pulvinar augue id mi aliquet, ac ultrices ligula convallis. Donec eu pretium erat. Ut sit amet scelerisque elit. In venenatis quam at vestibulum tempus. Quisque laoreet metus vel ornare dignissim. Pellentesque iaculis elit eu purus cursus dignissim.

Donec congue libero sed mi egestas convallis. Sed sed tortor sed nisi scelerisque mattis id et mi. Donec tempor ipsum et eros dignissim, vitae tempus justo accumsan. Nam sit amet aliquam ex. Donec at urna nec ex feugiat tristique. Integer consectetur ultricies leo a venenatis. Nunc aliquam, nisl eget pharetra feugiat, ligula velit placerat libero, a scelerisque mauris turpis sed sapien.

Nullam luctus bibendum lacus, ac dignissim j
      </p><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ipsum vitae viverra malesuada. Vestibulum varius pharetra velit eu rhoncus. Praesent accumsan mi at neque molestie fermentum. Morbi laoreet, orci in molestie laoreet, mi ex mattis arcu, eget gravida nulla magna mattis erat. Nulla egestas lorem a massa pellentesque scelerisque. Nam accumsan augue at risus lacinia, et dignissim leo eleifend. Sed lacinia sem ac accumsan feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices ultrices tellus sed consectetur. Integer in nulla quis elit imperdiet bibendum eget at elit. Sed pulvinar augue id mi aliquet, ac ultrices ligula convallis. Donec eu pretium erat. Ut sit amet scelerisque elit. In venenatis quam at vestibulum tempus. Quisque laoreet metus vel ornare dignissim. Pellentesque iaculis elit eu purus cursus dignissim.

Donec congue libero sed mi egestas convallis. Sed sed tortor sed nisi scelerisque mattis id et mi. Donec tempor ipsum et eros dignissim, vitae tempus justo accumsan. Nam sit amet aliquam ex. Donec at urna nec ex feugiat tristique. Integer consectetur ultricies leo a venenatis. Nunc aliquam, nisl eget pharetra feugiat, ligula velit placerat libero, a scelerisque mauris turpis sed sapien.

Nullam luctus bibendum lacus, ac dignissim j
      </p><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ipsum vitae viverra malesuada. Vestibulum varius pharetra velit eu rhoncus. Praesent accumsan mi at neque molestie fermentum. Morbi laoreet, orci in molestie laoreet, mi ex mattis arcu, eget gravida nulla magna mattis erat. Nulla egestas lorem a massa pellentesque scelerisque. Nam accumsan augue at risus lacinia, et dignissim leo eleifend. Sed lacinia sem ac accumsan feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices ultrices tellus sed consectetur. Integer in nulla quis elit imperdiet bibendum eget at elit. Sed pulvinar augue id mi aliquet, ac ultrices ligula convallis. Donec eu pretium erat. Ut sit amet scelerisque elit. In venenatis quam at vestibulum tempus. Quisque laoreet metus vel ornare dignissim. Pellentesque iaculis elit eu purus cursus dignissim.

Donec congue libero sed mi egestas convallis. Sed sed tortor sed nisi scelerisque mattis id et mi. Donec tempor ipsum et eros dignissim, vitae tempus justo accumsan. Nam sit amet aliquam ex. Donec at urna nec ex feugiat tristique. Integer consectetur ultricies leo a venenatis. Nunc aliquam, nisl eget pharetra feugiat, ligula velit placerat libero, a scelerisque mauris turpis sed sapien.

Nullam luctus bibendum lacus, ac dignissim j
      </p><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ipsum vitae viverra malesuada. Vestibulum varius pharetra velit eu rhoncus. Praesent accumsan mi at neque molestie fermentum. Morbi laoreet, orci in molestie laoreet, mi ex mattis arcu, eget gravida nulla magna mattis erat. Nulla egestas lorem a massa pellentesque scelerisque. Nam accumsan augue at risus lacinia, et dignissim leo eleifend. Sed lacinia sem ac accumsan feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices ultrices tellus sed consectetur. Integer in nulla quis elit imperdiet bibendum eget at elit. Sed pulvinar augue id mi aliquet, ac ultrices ligula convallis. Donec eu pretium erat. Ut sit amet scelerisque elit. In venenatis quam at vestibulum tempus. Quisque laoreet metus vel ornare dignissim. Pellentesque iaculis elit eu purus cursus dignissim.

Donec congue libero sed mi egestas convallis. Sed sed tortor sed nisi scelerisque mattis id et mi. Donec tempor ipsum et eros dignissim, vitae tempus justo accumsan. Nam sit amet aliquam ex. Donec at urna nec ex feugiat tristique. Integer consectetur ultricies leo a venenatis. Nunc aliquam, nisl eget pharetra feugiat, ligula velit placerat libero, a scelerisque mauris turpis sed sapien.

Nullam luctus bibendum lacus, ac dignissim j
      </p>
    </div>
  );
}
