<template>
    <div v-if="removeCollaboratorModal == true" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
        <div class="bg-white rounded-lg p-6 max-w-md">
            <!-- <h3 class="text-xl text-center font-semibold mb-4">Remove Collaborator</h3> -->
            <div class="mb-6 text-center">
                <span class="font-medium">Are you sure you want to remove <span class="capitalize italic">{{ collaboratorDropdownUser.username }} </span></span> ?
                <p class="mt-2">
                    This action will remove the user from the project and all their task associations.
                </p>
                </div>
            <div class="flex justify-end gap-4">
                <button
                    @click="removeCollaboratorModal = false"
                    class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                >
                    Cancel
                </button>
                <button
                    @click="handleRemoveCollaborators"
                    :class="`px-4 py-2 text-white rounded-lg transition-colors text-sm ${
                                removeCollaboratorModalLoading
                                ? 'bg-red-300 cursor-not-allowed'
                                : 'bg-red-600 hover:bg-red-700'
                            }`"            
                    :disabled="removeCollaboratorModalLoading"
                >
            
                    <span v-if="removeCollaboratorModalLoading" class="flex items-center justify-center ">
                        <svg class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Removing...
                    </span>
                    <span v-else>Remove User</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        header: {type: String , default: ''},
        message: {type: String, default: ''},
        button1 : {type: String, default: 'cancel'},
        button2: {type: String, default: ''}

    })

</script>

<style>

</style>