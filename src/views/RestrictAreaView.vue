<template>
    <main class='container'>
      <h1>Usuários cadastrados</h1>
      <table id="example6" class='table table-striped table-hover mt-3'>
        <!-- <thead>
          <th>Identifier</th>
          <th>Nome</th>
          <th>Email</th>
        </thead>
        <tbody id='principal_table'>
        </tbody> -->
      </table>
      <hot-table :data='data' :rowHeaders='true' :colHeaders='true'></hot-table>
    </main>
</template>

<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { HotTable } from '@handsontable/vue'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.css'

registerAllModules()

export default {
  name: 'RestrictArea',
  data: () => {
    return {
      data: [
        ['uid', 'Nome', 'E-mail']
      ]
    }
  },
  created () {
    this.getData()
  },
  components: {
    HotTable
  },
  methods: {
    async getData () {
      const db = getFirestore(this.$firebase)
      const querySnapshot = await getDocs(collection(db, 'usuarios'))

      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name}`)
        this.data.push([doc.id, doc.data().name, doc.data().email])
      })
    }
  }
}
</script>

<style lang='scss'>
@import '../assets/scss/variables';
  main {
    display: flex;
    flex-direction: column;

    h1 {
      color: $principal;
      font-size: 1.5em;
    }
  }
  .wtHider {
    min-width: 100% !important;

    .wtSpreader {
      min-width: 100% !important;
    }
  }
  .handsontable table.htCore {
    min-width: 100% !important;

      colgroup {
        display: none !important;
      }

      tr:first-child {
        font-weight: bold !important;
      }

      td {
        padding: 8px;

        &:hover {
          background-color: rgba($color: #444, $alpha: 0.2);
        }
      }
  }
  thead, th {
    display: none;
  }
</style>
