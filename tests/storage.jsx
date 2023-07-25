{
  /* <Page className="section-container">
        <Text.Title size="small">Dialog & Modal</Text.Title>
        <Box mt={4}>
          <Button
            variant="secondary"
            fullWidth
            onClick={() => {
              setDialogVisible(true);
            }}
          >
            Info Dialog
          </Button>
        </Box>

        <Box mt={4}>
          <Button
            variant="secondary"
            fullWidth
            onClick={() => {
              setModalVisible(true);
            }}
          >
            Custom Modal With Cover
          </Button>
        </Box>
        <Modal
          visible={dialogVisible}
          title="Thông báo"
          style={{ textAlign: "right" }}
          onClose={() => {
            setDialogVisible(false);
          }}
          actions={[
            {
              text: "Hủy",
            },
            {
              text: "Đồng ý",
              close: true,
              highLight: true,
            },
          ]}
          description="Bạn có chắc muốn đăng xuất?"
        />
        <Modal
          visible={vDialogVisible}
          title="Thông báo"
          onClose={() => {
            setVDialogVisible(false);
          }}
          verticalActions
          actions={[
            {
              text: "Hủy",
            },
            {
              text: "Đồng ý",
              close: true,
              highLight: true,
            },
          ]}
          description="Bạn có chắc muốn đăng xuất?"
        />
        <Modal
          visible={popupVisible}
          title="This is the title"
          onClose={() => {
            setPopupVisible(false);
          }}
          verticalActions
          description="This is a very long message that can be displayed in 3 lines"
        >
          <Box p={6}>
            <Button
              onClick={() => {
                setPopupVisible(false);
              }}
              fullWidth
            >
              Xác nhận
            </Button>
          </Box>
        </Modal>
        <Modal
          visible={modalVisible}
          title="ZaUI 2.0 Modal"
          coverSrc={"https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8"}
          onClose={() => {
            setModalVisible(false);
          }}
          zIndex={1200}
          actions={[
            {
              text: "Button",
            },
            {
              text: "Cancel",
              close: true,
              highLight: true,
            },
          ]}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
      </Page> */
}
