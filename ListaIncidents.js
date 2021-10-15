var gr = New GlideRecord('incident');
gr.AddQuery('priority',1);
gr.query();
While (gr.next())
   gs.print(gr.number);
