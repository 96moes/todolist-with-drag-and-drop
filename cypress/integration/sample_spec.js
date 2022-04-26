// import '@4tw/cypress-drag-drop';
describe('My frist test', function() {
    it('visit localhost', function(){
        cy.visit('http://localhost:3000/');
        cy.get('input').type('say hello to family');
        cy.get('button').click();
        cy.get('input').clear().type('say goodbye');
        cy.get('button').click();


        

        moveItem('say hello to family', 'Unstarted', 'Started');
        should_be_in('say hello to family', 'Started');
  

        // cy.contains('say hello to family')
        //   .trigger("mousedown", { which: 1 })
        //   .trigger("mousemove")
        //   .trigger('dragstart')
        //   .trigger('dragenter')
        // cy.get('#do')
        //   .trigger('dragover')
        //   .trigger('drop')
        //   .trigger('dragend')
        //   .trigger("mouseup")
        // cy.contains('say hello to family').drag('#do')
        // cy.contains('say hello to family').move({ deltaX: 800, deltaY: 0 })
        // cy.get('button').click();
        // cy.get('input').clear().type('say how are you');
        // cy.get('button').click();
        // cy.get('input').clear().type('say something');
        // cy.get('button').click();
        // cy.get('input').clear();
        // cy.get('.list .item').contains('say hello to family').trigger('dragstart', { dataTransfer: new DataTransfer });
       
    })
})
function moveItem(title_of_work, position_start, position_end) {
  const dataTransferMock = { setData:() => {}};
  if(position_start === 'Unstarted'){
    cy.get('div#un').contains(title_of_work).trigger("dragstart", {
      dataTransfer: dataTransferMock
    });
  }
  else if(position_start === 'Started'){
    cy.get('div#st').contains(title_of_work).trigger("dragstart", {
      dataTransfer: dataTransferMock
    });
  }
  else if(position_start === 'Done'){
    cy.get('div#do').contains(title_of_work).trigger("dragstart", {
      dataTransfer: dataTransferMock
    });
  }

  if(position_end === 'Unstarted'){
    cy.get('div#un').trigger('dragover');
  }
  else if(position_end === 'Started'){
    cy.get('div#st').trigger('dragover');
  }
  else if(position_end === 'Done'){
    cy.get('div#do').trigger('dragover');
  }
  
}
function should_be_in(title_of_work, position) {
  if(position === 'Unstarted'){
    cy.get('div#un').contains(title_of_work).should("have.text", title_of_work);
  }
  else if(position === 'Started'){
    cy.get('div#st').contains(title_of_work).should("have.text", title_of_work);
  }
  else if(position === 'Done'){
    cy.get('div#do').contains(title_of_work).should("have.text", title_of_work);
  }
}