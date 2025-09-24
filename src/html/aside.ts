export const container = `
<div class="containers flex pt-16 h-screen" id="container"></div>
`

export const aside =`
<aside class="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] overflow-y-auto p-4">
  <!-- 分组菜单 -->
  <div class="space-y-6">
    <% it.navdata.forEach(function(rowitem){ %>
    <% if(rowitem.haschild){ %>
      <p class="text-xs font-semibold text-gray-500 uppercase mb-2">
        <%=rowitem.name%>
      </p>
      <ul class="space-y-2">
        <% rowitem.item.forEach(function(itemchild){ %>
        <li>
          <a href="<%=itemchild.rout%>" class="block text-gray-700 hover:text-green-600">
            <%=itemchild.title%>
          </a>
        </li>
        <% }) %>
      </ul>
    <% }else{ %>
      <ul class="space-y-1" style="height:20px;line-height:20px;">
        <li>
          <a href="<%=rowitem.rout%>" class="flex items-center text-gray-700 hover:text-green-600">
            <%=rowitem.title%>
          </a>
        </li>
      </ul>
    <% }}) %>
  </div>
</aside>

`