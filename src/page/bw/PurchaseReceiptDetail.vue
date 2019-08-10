<template>
    <div>
        <div class="container">
            asd 
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            purchaseOrderId:"",
            Product: {
                data: [],
                val: ""
            },
            Qty: 0,
            Price: 0,
            table: [], //用户数据
            sels: [] // 选中的数据
        };
    },
    activated() {
        this.initialization();
    },
    methods: {
        initialization() {
            this.purchaseOrderId = this.$route.query.model.Id;
            this.getProduct();
            this.getPurchaseOrderDetail();
        },
        getProduct() {
            this.$http.get("/api/Product/GetProductView", {}).then(res => {
                this.Product.data = res.data;
                this.Product.val = res.data[0].Id;
                console.log(res.data);
            });
        },
        getPurchaseOrderDetail() {
            this.$http
                .get("/api/PurchaseOrder/GetPurchaseOrderDetailView", {
                    params: {
                        purchaseOrderId:this.purchaseOrderId
                    }
                })
                .then(res => {
                    this.table = res.data;
                    console.log(res.data);
                });
        },
        selsChange(sels) {
            //被选中的行组成数组
            this.sels = sels;
        },
        onSubmit() {
            this.$http
                .get("/api/PurchaseOrder/AddPurchaseOrderDetail", {
                    params: {
                        PurchaseOrderId:  this.purchaseOrderId,
                        ProductId: this.Product.val,
                        Qty: this.Qty,
                        UnitPrice: this.Price,
                        Note: "",
                        CreateUserId: "W001"
                    }
                })
                .then(res => {
                    this.getPurchaseOrderDetail();
                });
        },
        onCancel() {
            setTimeout(this.$router.push("mypurchaseorder"), 1000);
        }
    }
};
</script>