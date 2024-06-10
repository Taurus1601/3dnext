import React from 'react'
import { Tabs } from '@radix-ui/themes';
import { Box } from '@radix-ui/themes';
import { Table } from '@radix-ui/themes';
import { Flex, Text, Button } from '@radix-ui/themes';
function Interface() {
  return (
    <>

    <div className='p-5'>
      <Tabs.Root defaultValue="account">
        <Tabs.List>
      <Tabs.Trigger value="account">Details</Tabs.Trigger>
      <Tabs.Trigger value="documents">Marks</Tabs.Trigger>
      <Tabs.Trigger value="settings">Attendance</Tabs.Trigger>
        </Tabs.List>
      
        <Box pt="3">
      <Tabs.Content value="account">
      <Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Semester</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
      <Table.Cell>danilo@example.com</Table.Cell>
      <Table.Cell>6</Table.Cell>
    </Table.Row>

   

   
  </Table.Body>
</Table.Root>
      </Tabs.Content>
      <Tabs.Content value="documents">
      <Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Subjects</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Marks</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Credits</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>software engineering</Table.RowHeaderCell>
      <Table.Cell>30</Table.Cell>
      <Table.Cell>4</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Web Security </Table.RowHeaderCell>
      <Table.Cell>30</Table.Cell>
      <Table.Cell>3</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Cloud </Table.RowHeaderCell>
      <Table.Cell>30</Table.Cell>
      <Table.Cell>3</Table.Cell>
    </Table.Row>

   
  </Table.Body>
</Table.Root>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <Text size="2">Edit your profile or update contact information.</Text>
      </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
    </>
  )
}

export default Interface;